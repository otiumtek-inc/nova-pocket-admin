import { inject, ref, onMounted, onBeforeUnmount, } from "vue";

const useLandingData = (block) => {
  
  const emitter = inject("$emitter");
  const { VUE_APP_API_BACKEND_URL } = inject('env');

  const blockInfo = ref({
    title: "",
    subtitle: "",
    images: [],
    features: [],
    appstore: {},
    playstore: {}
  })

  const handlerHeaderReceiveData = ({ header: data }) => {
    blockInfo.value = {
      title: data.meta_info.title,
      subtitle: data.meta_info.subtitle,
      images: data.images?.data
        .map(x => ({ name:x.attributes.name, alt: x.attributes.alternativeText, url: `${VUE_APP_API_BACKEND_URL}${x.attributes.url}` }))
        .filter(x => data.meta_info["images-phone"].includes(x.name)) || [],
    }
  }

  const handlerAboutReceiveData = ({ about: data }) => {
    blockInfo.value = {
      title: data.meta_info.title,
      content: data.meta_info.content,
    }
  }

  const handlerFeaturesReceiveData = ({ features: data }) => {
    const images = data.images?.data.map(x => ({ name:x.attributes.name, alt: x.attributes.alternativeText, url: `${VUE_APP_API_BACKEND_URL}${x.attributes.url}` }))
    blockInfo.value = {
      title: data.meta_info.title,
      image: images.length > 0 ? images[0] : {},
      features: data.posts.map(x => ({id:x.id, content: x.content, icon: x.font_icon}))
    }
  }

  const handlerFaqsReceiveData = ({ faqs: data }) => {
    blockInfo.value = {
      title: data.meta_info.title,
      faqs: data.posts.map(x => ({id:x.id, title: x.title, content: x.content}))
    }
  }

  const handlerDownloadReceiveData = ({ download: data }) => {
    blockInfo.value = {
      title: data.meta_info.title,
      content: data.meta_info.content,
      appstore: data.meta_info.appstore,
      playstore: data.meta_info.playstore,
    }
  }

  const handlerTermsReceiveData = ({ terms: data }) => {
    blockInfo.value = {
      title: data.meta_info.title,
      content: data.content,
    }
  }

  const blockResolverInfo = {
    header: handlerHeaderReceiveData,
    about: handlerAboutReceiveData,
    features: handlerFeaturesReceiveData,
    faqs: handlerFaqsReceiveData,
    download: handlerDownloadReceiveData,
    terms: handlerTermsReceiveData
  }

  onMounted(() => {
    emitter.on("receive-data", blockResolverInfo[block]);
  });

  onBeforeUnmount(() => {
    emitter.off("receive-data");
  })

  return {
    blockInfo
  };
};

export default useLandingData;

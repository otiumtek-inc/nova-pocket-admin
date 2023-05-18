import { inject } from "vue";
import { useRouter } from "vue-router";

const useToolkit = () => {
  const router = useRouter();
  const { VUE_APP_STELLAR_EXPLORER_URL } = inject('env')
  
  const tkOpenStellarExplorer = (account) => {
    window.open(`${VUE_APP_STELLAR_EXPLORER_URL}/search?term=${account}`, "_blank")
  }

  const tkOpenExternalUrl = (url) => {
    window.open(url, "_blank")
  }

  const tkNavigate = (name, params = {}, openInNewTab = false) => {
    if (openInNewTab) {
      const routeData = router.resolve({ name, params });
      window.open(routeData.href, "_blank");
    } else {
      router.push({ name, params });
    }
  };

  return {
    tkNavigate,
    tkOpenExternalUrl,
    tkOpenStellarExplorer
  };
};

export default useToolkit;

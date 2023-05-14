import { APP_NAME } from '@/config/constants/general';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title + ' | ' + APP_NAME;
  }, [title]);
}

export default useDocumentTitle;

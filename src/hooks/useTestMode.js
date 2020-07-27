import { useContext } from 'react';
import EditorContext from 'State/editorContext';

function useTestMode(testId) {
    const { isTestModeActive } = useContext(EditorContext);
    return isTestModeActive ? { 'data-testid': testId?.toLowerCase() } : {};
}

export default useTestMode;

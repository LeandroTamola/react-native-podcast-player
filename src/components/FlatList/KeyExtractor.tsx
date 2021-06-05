import {useCallback} from 'react';

const KeyExtractor = useCallback((_, index) => String(index), []);

export default KeyExtractor;

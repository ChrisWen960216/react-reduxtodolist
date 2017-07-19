import { SET_VISIBILITY_FILITER } from './actionType.js';
import { FilterTypes } from './constant.js';

export const setFilters = (filter) => ({
    type: SET_VISIBILITY_FILITER,
    FilterTypes
})
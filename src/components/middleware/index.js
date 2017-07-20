/**
 * Created By ChrisWen
 * Middlewave 
 * print action.type status
 */
export const loggerConst = ({getState}) => next => action => {
    // console.group(action.type);
    // console.info('dispatching', action);
    let result = next(action);
    // console.log('next action', getState());
    //console.groupEnd(action.type);
    return result;
}
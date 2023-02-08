import classes from './Loader.module.css'

function Loader ({
  isLoading
}: {isLoading: boolean}){
  return (
    <div className={`${classes.loaderRoot} ${isLoading ? classes.onLoading : undefined}`} />
  )
}

export default Loader;
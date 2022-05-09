// CssModules.module.scssをimportするがimport名はなんでも良い。ただし、ファイルパスは呼び出したいscssファイルを指定すること
import classes from "./CssModules.module.scss";

// CSS ModuleによるCSSスタイルの形成
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}> - CSS Modules - </p>
      <button className={classes.button}>Fight!!!</button>
    </div>
  );
};

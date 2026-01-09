import "../Styles/Val_Com.css";

const Val_Com = (props) => {
  return (
    <div className="main_con">
      <div className="parameters">
        {props.tag.map((tag, i) => {
        return (
          <div className="content_box" key={i}>
            <div className="param" key={i+1}>
              <p className="value" key={i+2}>{props.val[props.keys[i]]}</p>
              <div className="icon" key={i+3}>
                <img src={require(`../Assets/Images/${props.img[i]}.png`)} alt="ICON" key={i+4}></img>
              </div>
            </div>
            <p className="key" key={i+5}>{tag}</p>
          </div>
        );
      })}
        </div> 
        <div className="vitals">  
          <div className="content_box">
            <div className="param">
              <p className="value">{props.val["Battery"]}V</p>
              <div className="icon">
                <img src={require(`../Assets/Images/Battery_Icon.png`)} alt="ICON"></img>
              </div>
            </div>
            <p className="key">Battery</p>
          </div>
      <div className="content_box">
            <div className="param">
              <p className="value">{props.fan_state ? "ON" : "OFF"}</p>
              <div className="icon">
                <img src={require(`../Assets/Images/Fan_Icon.png`)} alt="ICON"></img>
              </div>
            </div>
            <p className="key">Exhaust Fan</p>
          </div>
    </div>
    </div>
  );
};

export default Val_Com;

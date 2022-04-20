import styles from "../styles/IcecreamList.module.css";
import IcecreamCard from "./IcecreamCard";


const IcecreamList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST ICE CREAM IN TOWN</h1>
      <p className={styles.desc}>
        Come and disappear in our creamy world..!!!<br/>
        Check out our new flavors today...!!!
      </p>
      <div className={styles.wrapper}>
           <IcecreamCard img="/img/1.png" title="Strawberry Blossom"
          description="Feel the strawberry taste in every lick" price="$15" />
          <IcecreamCard img="/img/2.jpg" title="Jelly Bean"
          description="Mix of jelly flavor with blueberry finish" price="$40"/>
          <IcecreamCard img="/img/3.jpg" title="Rasperry vanilla"
          description="Feel the rasberry flavour with mix of vanilla flavour" price="$30"/>
          <IcecreamCard img="/img/4.jpg" title="Exotic dream"
          description="Mix of three unique flavours" price="$50" />
          <IcecreamCard img="/img/5.jpg" title="Choco Chrunch"
          description="Feel the chocolate flavour with some choco chips and vanilla taste" price="$10" />
          <IcecreamCard img="/img/6.jpg" title="Black forest"
          description="Excite with brownie and vanilla taste" price="$65" />
          <IcecreamCard img="/img/7.jpg" title="Magnum chocobar"
          description="Lip licking taste" price="$20" />
          <IcecreamCard img="/img/8.png" title="Cherry poppin Cone"
          description="Mix of cherry flavoured with strawberry and vanilla" price="$70" />
      </div>
    </div>
  );
};

export default IcecreamList;
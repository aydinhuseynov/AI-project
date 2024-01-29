import "../assets/css/services.css";
import ml1 from "../assets/images/ML.jpeg";
import ml2 from "../assets/images/10.jpeg";
import ml3 from "../assets/images/3.jpeg";
import ml4 from "../assets/images/4.jpeg";
import ml5 from "../assets/images/5.jpeg";
import ml6 from "../assets/images/6.jpeg";
import ml7 from "../assets/images/7.jpeg";
import ml8 from "../assets/images/8.png";
import ml9 from "../assets/images/9.jpeg";

const Services = () => {
  return (
    <div className="container my-3  ">
      <div className="row">
        <div className="card col-sm-12 col-md-6 col-lg-4 ">
          <img className="card-img-top" src={ml1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"> Machine Learning Development</h5>
            <p className="card-text">
              Unlock the true potential of your data with our machine learning
              development services. We create customized machine learning models
              tailored to your specific business needs, leveraging advanced
              algorithms and predictive analytics.
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Natural Language Processing (NLP)</h5>
            <p className="card-text">
              Unlock the true potential of your data with our machine learning
              development services. We create customized machine learning models
              tailored to your specific business needs, leveraging advanced
              algorithms and predictive analytics. 
            </p>
            <a href="#" className="btn btn-primary">
              Read more{" "}
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Computer Vision Solutions</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content. Some quick example text to build on the
              card title and make up the bulk of the cards content. Some quick
              example text to build on the card
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml4} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"> AI Consulting</h5>
            <p className="card-text">
              Integrate AI seamlessly into your existing infrastructure with our
              integration and deployment services. We ensure a smooth
              transition, from testing and validation to full-scale
              implementation Lorem, ipsum.
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml5} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"> Data Analytics and Insights</h5>
            <p className="card-text">
              Harness the power of your data with our data analytics and
              insights services. We turn raw data into actionable information,
              providing you with the knowledge needed to make informed decisions
              
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml6} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">AI Integration and Deployment</h5>
            <p className="card-text">
              Integrate AI seamlessly into your existing infrastructure with our
              integration and deployment services. We ensure a smooth
              transition, from testing and validation to full-scale
              implementation
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml7} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"> AI Training and Workshops</h5>
            <p className="card-text">
              Empower your team with AI knowledge through our training and
              workshops. From beginner-level overviews to advanced technical
              training, we tailor programs to suit your team needs. Lorem ipsum
              dolor sit amet.
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml8} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              here innovation meets intelligence. Our cutting-edge artificial
              intelligence services are designed to empower businesses,
              streamline processes, and revolutionize the way you interact with
              technology. Explore the future with our comprehensive AI
              solutions.
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img className="card-img-top" src={ml9} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Transform unstructured data into actionable insights with our NLP
              services. Our experts specialize in developing applications that
              understand, interpret, and generate human-like text. Whether it
              sentiment analysis, chatbots
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { useState } from "react";
import "../assets/css/faq.css";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="faq-section">
      <h1 className="text-center pt-5 text-white">Frequently Asked Questions</h1>
      <div className="wrapper ">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item " key={item.id}>
              <div className="title" onClick={() => toggle(i)}>
                <h4>{item.question}</h4>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={selected === i ? "content show" : "content answer"}
              >
                <p className="answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "Artificial Intelligence refers to the simulation of human intelligence in machines...",
    category: "Introduction",
  },
  {
    id: 2,
    question: "How does machine learning working?",
    answer:
      "In traditional programming, explicit instructions are provided to perform a task, while machine learning enables systems to learn from data...",
    category: "Machine Learning",
  },
  {
    id: 3,
    question: "What is zapplications of AI?",
    answer:
      "AI is used in various domains, including healthcare, finance, autonomous vehicles, and natural language processing...",
    category: "Applications",
  },
  {
    id: 4,
    question: "What is the difference between narrow AI and general AI?",
    answer:
      "Narrow AI is designed to perform a specific task, while general AI has the ability to understand, learn, and apply knowledge across different domains...",
    category: "Types of AI",
  },
  {
    id: 5,
    question: "How does deep learning work?",
    answer:
      "Deep learning is a subset of machine learning that involves neural networks with multiple layers...",
    category: "Deep Learning",
  },
  {
    id: 5,
    question: "How AI machine work?",
    answer:
      "Deep learning is a subset of machine learning that involves neural networks with multiple layers...",
    category: "Deep Learning",
  },
  {
    id: 5,
    question: "How effect deep learning  to work?",
    answer:
      "Deep learning is a subset of machine learning that involves neural networks with multiple layers...",
    category: "Deep Learning",
  },
];

export default FAQ;

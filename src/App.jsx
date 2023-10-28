import { useState } from 'react'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex === index ? null : index));
  }
  const panels = [
    {
      title: "Sharing state between components",
      content: "Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code."
    },
    {
      title: "Example",
      content: "In this example, only one panel should be active at a time. To achieve this, instead of keeping the active state inside each individual panel, the parent component holds the state and specifies the props for its children."
    }
  ];
  return (
    <>
    <div className='container'>
      <h2>React - Managing State</h2>
      <div>
        {panels.map((panel, index) => (
          <Panel 
            key={index} 
            title={panel.title} 
            content={panel.content} 
            isActive={activeIndex === index}
            onShow={()=>handleToggle(index)}
          />
        ))}
      </div>
    </div>
    </>
  )
}
function Panel({title, content, isActive, onShow}) {
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? (
        <div>
          <p>{content}</p>
          <button onClick={onShow}>Hide</button>
        </div>
        ) : (
          <button onClick={onShow}>Show</button>
        )}
    </section>
  );
}

export default App

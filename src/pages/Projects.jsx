
export default function Projects() {
  return (
    <section>
      <h2>My Projects</h2>

      <div className="project">
        <h3>Todo App</h3>
        <img src={process.env.PUBLIC_URL + "/todo.png"} alt="Todo App" style={{width: '500px', height:'auto'}} />
        <p>A basic task management app built using React Native and Expo, site link in the comments</p>
        <a href=" https://youtu.be/rm4-zfmUhFg" target="_blank">View on Youtube.</a>
      </div>

      <div className="project">
        <h3>Exercise App</h3>
        <img src={process.env.PUBLIC_URL + "/exercise.png"} alt="Exercise App" style={{width: '500px', height:'auto'}}/>
        <p>A basic exercise tracker app, site link in comments</p>
        <a href=" https://youtu.be/2ceuuEmhejI" target="_blank">View on Youtube.</a>
      </div>

      <div className="project">
        <h3>Quiz App</h3>
        <img src={process.env.PUBLIC_URL + "/quiz.png"} alt="Quiz App" style={{width: '500px', height:'auto'}}/>
        <p>A basic quiz app, site link in the comments.</p>
        <a href=" https://youtu.be/EX1hHGo-Oe8" target="_blank">View on Youtube.</a>
      </div>
    </section>
  );
}

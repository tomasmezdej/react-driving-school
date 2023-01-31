import Button from "../Global/Button";

export default function Banner() {
  return (
   <div className="banner">
      <div>
        <h1>
          Become driver <br />
          easy & quick
        </h1>
      </div>
      <div>
        <h3>
          Driver´s license and updating skills
        </h3>
      </div>
      <div>
        <Button
          title="Entry"
        />
        <Button
          secondary
          title="Call me back"
        />
      </div>
   </div>
  )
}

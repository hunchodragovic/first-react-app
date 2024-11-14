import "./newComponent.css";
export function MyFirstComponent({postName="no content",postBody="no body"}) {
  
    return (
      <div className="containerDiv">
      <div className="firstDiv">
       <h1>{postName}</h1>
<hr></hr>
<h2>{postBody}</h2>
      </div>
      </div>
    )
  }

export function MySecondComponent({title="Tag button"}){
  return (
   <div>
<button className="btn">{title}</button>
</div>
  )
 
}
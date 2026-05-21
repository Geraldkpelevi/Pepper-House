
function Card({img, title}) {
  return (
    <div className="card shadow text-center">
        <div className="card-header">
            <img src={img} alt="" width={"100%"} height={270} />
        </div>
        <div className="card-body">
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Card;
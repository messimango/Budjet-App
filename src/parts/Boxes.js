export default function Boxes({name, amount, mamount}) {
  return (
    <div>
        <div className="box">
            <header className="box-title">
                <h1>{name}</h1>
                <h1>{amount} / {mamount} </h1>
            </header>
        </div>
    </div>
  )
}

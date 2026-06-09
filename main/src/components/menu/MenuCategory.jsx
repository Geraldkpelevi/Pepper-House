
function MenuCategory({menuImage, menuName}) {
  return (
    <div className="text-center ">
        <img style={{boxShadow: "0 0 10px gray"}} className="rounded-circle " src={menuImage} alt={menuName} height={70} width={70} />
    <h5 className="mt-2">{menuName}</h5>
    </div>
  )
}

export default MenuCategory
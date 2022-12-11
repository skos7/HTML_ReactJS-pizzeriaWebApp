import Button from "./elements/Button";

const ProductDetailCard = ({ product, onAddProduct }) => {

    return (
        <div className="p-5 m-5 rounded-lg bg-slate-50">
            <div className="flex flex-col items-centar justify-center">
                <h2 className="text-5xl">{product.name}</h2>
                <div className="items-center justify-between">
                    <div className="text-4xl text-black">{product.price + "€"}</div>
                </div>
            </div>
            <div className="w-full flex items-end justify-center">
                <p className="text-2xl text-gray-500 whitespace-pre">
                    {product.desciption}
                </p>
                <img src={product.imageUrl} className="h-60 w-60 rounded-xl object-cover box-content h-80 w-80 p-4" alt={product.name} />
            </div>


            <div className="w-full flex items-center justify-center">
                <Button onClick={onAddProduct}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductDetailCard;

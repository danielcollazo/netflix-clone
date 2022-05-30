import { CheckIcon } from '@heroicons/react/solid'
import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

const formatMonthlyPrice = (product: Product) => {
  const formattedCurrency = product.prices[0].currency.toUpperCase()
  const formattedPrice = product.prices[0].unit_amount! / 100

  return `${formattedCurrency} ${formattedPrice}`
}

const formatVideoQuality = (value: string | null): string => {
  const firstLetter = value?.slice(0, 1).toUpperCase()
  const remainder = value?.slice(1)
  return `${firstLetter}${remainder}`
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {formatMonthlyPrice(product)}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {formatVideoQuality(product?.metadata?.videoQuality?.toString()!)}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="w8 inline-block h-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table

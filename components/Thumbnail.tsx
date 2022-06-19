import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const setShowModal = useSetRecoilState(modalState)
  const setCurrentMovie = useSetRecoilState(movieState)
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setShowModal(true)
        setCurrentMovie(movie)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail

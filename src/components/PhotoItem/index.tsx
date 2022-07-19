import * as C from './styles'

type Props = {
    url: string
    name: string
    onDelete: (name: string) => void
}
export function PhotoItem({ url, name, onDelete }: Props) {
    return (
        <C.Container>
            <button onClick={() => onDelete(name)}>⛔️</button>

            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}
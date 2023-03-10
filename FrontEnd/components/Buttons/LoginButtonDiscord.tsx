import { Button, Text } from '@nextui-org/react'
import { SiDiscord } from 'react-icons/si'

export const LoginButtonDiscord = () => {   
    return (
        <Button color={'primary'} bordered auto icon={<SiDiscord size={24}/>}>
            <Text weight={'extrabold'}></Text>
        </Button>
    )
}
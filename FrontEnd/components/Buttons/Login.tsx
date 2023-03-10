import { Button, Text } from '@nextui-org/react'

interface ButtonPros {
    text:String
}

export const LoginButton = (props: ButtonPros) => {
    return (
        <Button color={'success'} bordered >
            <Text weight={'extrabold'}>{props.text}</Text>
        </Button>
    )   
}
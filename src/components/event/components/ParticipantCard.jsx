import React from 'react'
import { Avatar, Tooltip } from "@nextui-org/react";

export const ParticipantCard = ({ name }) => {
    return (
        <Tooltip content={name}>
            <Avatar name={name} color='primary' />
        </Tooltip>
    )
}

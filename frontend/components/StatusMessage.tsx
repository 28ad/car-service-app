import React from 'react'

type StatusMessageProps = {
    statusMessage: string,
    statusType?: 'error' | 'success' | 'info';
}

export default function StatusMessage({ statusMessage, statusType }: StatusMessageProps) {

    const styles = {
        error: 'bg-red-400',
        success: 'bg-green-400',
        info: 'bg-blue-400',
    };

    return (
        <div className={`p-4 w-[80%] text-white text-left rounded-md m-8 lg:m-4 ${styles[statusType || 'info']} `}>
            {statusMessage}</div>
    )
}

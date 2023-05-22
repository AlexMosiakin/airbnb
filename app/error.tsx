'use client'

import { useEffect } from "react";
import { EmptyState } from "./components/EmptyState/EmptyState";

interface ErrorStateProps {
    error: Error;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error}) => {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <EmptyState
            title="Un oh"
            subtitle="Something went wrong!"
        />
    )
}
import React, { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router'

export function usePath() {
    const { pathname, search } = useLocation()
    const [param, _] = useSearchParams()
    const getNextPath = (newPath: string) => `${newPath}${search}`
    useEffect(() => {
        console.log(pathname);
        console.log(search)
        console.log(param.get('code'), param.get('state'), param.get('liffClientId'), param.get('liffRedirectUri'))
    }, [pathname])
    return { pathname, search, getNextPath }
}
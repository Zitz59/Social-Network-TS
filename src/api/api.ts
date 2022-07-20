import axios from 'axios';
import {UserType} from '../redux/users-reducer';

type ApiUsersType = {
    items: Array<UserType>
    totalCount: number
    resultCode: number
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6b74dff9-4a4a-410f-be7c-0e00f1a06ec7'
    }
});

export const usersAPI = {
    getUsersList(currentPage: number, pageSize: number) {
        return instance.get<ApiUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: { data: ApiUsersType; }) => {
                return response.data
            })
    },
    getNextPageUsersList(pageNumber: number, pageSize: number) {
        return instance.get<ApiUsersType>(`users?page=${pageNumber}&count=${pageSize}`)
            .then((response: { data: ApiUsersType; }) => {
                return response.data
            })
    },
    followUser(userId: number) {
        return instance.post<ApiUsersType>(`follow/${userId}`)
            .then((response: { data: ApiUsersType; }) => {
                return response.data
            })
    },
    unFollowUser(userId: number) {
        return instance.delete<ApiUsersType>(`follow/${userId}`)
            .then((response: { data: ApiUsersType; }) => {
                return response.data
            })
    }
}
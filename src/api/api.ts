import axios from 'axios';
import {UserType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profileReducer';

type ApiUsersType = {
    items: Array<UserType>
    totalCount: number
    resultCode: number
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fede4ff7-c313-462c-a587-eaa0340c98b7'
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
        return instance.delete<ApiUsersType>(`follow/` + userId)
            .then((response: { data: ApiUsersType; }) => {
                return response.data
            })
    },
    getProfile(userId: number) {
        console.log('Obsolete please use profileAPI object')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then((response) => {
                return response.data
            });
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then((response) => {
                return response.data
            })
    }, updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then((response) => {
                return response.data
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe?: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/logout`)
    }
}


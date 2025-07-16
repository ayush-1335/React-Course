import conf from '../conf'
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Servies{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteDatabaseId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async creatPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite servies :: creatPost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featureImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite servies :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite servies :: deletePost :: error", error)
        }
    }

    async getPost(){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite servies :: getPost :: error", error)
            return false
        }
    }

    async getPosts(){}

}


const servies = new Servies()
export default servies;
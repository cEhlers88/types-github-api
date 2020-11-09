/**
 * Interface IIssue
 * Created 09.11.20
 *
 * @author Christoph Ehlers <Christoph.Ehlers1988@gmx.de>
 */
import {IUser} from "./IUser";

export interface IIssue {
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    node_id: string
    number: number
    title: string
    user: IUser
    labels: any[]
    state: string
    locked: false
    assignee: any
    assignees: any[]
    milestone: any
    comments: number
    created_at: string
    updated_at: string
    closed_at: any
    author_association: string
    body: string
}
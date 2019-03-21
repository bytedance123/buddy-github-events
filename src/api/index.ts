import { Event as GithubEvent } from 'parse-github-event'

import { GithubUser } from './types'

const GITHUB_API = 'https://api.github.com'

export const fetchGithubProfileApi = (name: string): Promise<GithubUser> =>
  fetch(`${GITHUB_API}/users/${name}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json() as Promise<GithubUser>
  })

// @see https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received
export const fetchGithubEventsApi = (name: string): Promise<GithubEvent[]> =>
  fetch(`${GITHUB_API}/users/${name}/received_events/public`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json() as Promise<GithubEvent[]>
  })
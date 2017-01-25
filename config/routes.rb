require 'sidekiq/web'

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api', defaults: { format: :json } do
    resources :tags, only: [:index, :create, :destroy] do
      collection do
        get 'autocomplete'
      end
    end
    resources :episodes, only: [:index, :show, :create, :update, :destroy]
    resources :episode_types, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :youtube_videos, only: [:index, :create, :update] do
      collection do
        get 'autocomplete'
        get 'status'
      end
    end
    resource :users, only: [:update]
    resources :similar_episode_groups, only: [:index, :show, :update, :create, :destroy]
    resources :starred_episode_users, only: [:create, :destroy]
    resources :feedbacks, only: [:index, :create]
    mount Sidekiq::Web, at: '/sidekiq'
  end

  namespace 'auth', defaults: { format: :json } do
    post 'login', to: 'authentication#authenticate_user'
    get 'me', to: 'authentication#me'
    post 'twitch', to: 'authentication#twitch'
    post 'google', to: 'authentication#google'
    devise_for :users, only: [:registrations], controllers: { registrations: 'auth/registrations' }
  end
end

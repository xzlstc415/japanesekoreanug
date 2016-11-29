require 'sidekiq/web'

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api', defaults: { format: :json } do
    resources :tags, only: [:index]
    resources :episodes, only: [:index, :show, :create, :update, :destroy]
    resources :episode_types, only: [:index, :show]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :youtube_videos, only: [:index, :create]
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

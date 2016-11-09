Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :tags, only: [:index], defaults: { format: :json }
    resources :episodes, only: [:index, :show], defaults: { format: :json }
    resources :episode_types, only: [:index, :show], defaults: { format: :json }
    resources :comments, only: [:index, :create, :update, :destroy], defaults: { format: :json }
  end

  namespace 'auth', defaults: { format: :json } do
    post 'login', to: 'authentication#authenticate_user'
    get 'me', to: 'authentication#me'
    post 'twitch', to: 'authentication#twitch'
    devise_for :users, only: [:registrations], controllers: { registrations: 'auth/registrations' }
  end
end

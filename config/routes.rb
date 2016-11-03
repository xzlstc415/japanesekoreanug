Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :tags, only: [:index], defaults: { format: :json }
    resources :episodes, only: [:index, :show], defaults: { format: :json }
    resources :episode_types, only: [:index, :show], defaults: { format: :json }
    resources :comments, only: [:index], defaults: { format: :json }
  end

  scope '/auth' do
    get 'login', to: 'authentication#authenticate_user'
    get 'me', to: 'authentication#me'
    post 'twitch', to: 'authentication#twitch'
  end
  devise_for :users, path: 'auth'
end

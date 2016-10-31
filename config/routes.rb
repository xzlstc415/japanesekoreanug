Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :tags, only: [:index], defaults: { format: :json }
    resources :episodes, only: [:index, :show], defaults: { format: :json }
    resources :episode_types, only: [:index, :show], defaults: { format: :json }
    resources :comments, only: [:index], defaults: { format: :json }
    get 'auth_user', to: 'authentication#authenticate_user'
  end
  devise_for :users
end

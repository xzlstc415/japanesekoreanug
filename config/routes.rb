Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  scope '/api' do
    resources :tags, only: [:index], defaults: { format: :json }
    resources :episodes, only: [:index, :show], defaults: { format: :json }
    resources :episode_types, only: [:index, :show], defaults: { format: :json }
    resources :comments, only: [:index], defaults: { format: :json }
  end
end

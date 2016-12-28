# json.partial! 'episode', collection: @episodes, as: :episode, locals: { current_user: @current_user }
json.array! @episodes, partial: 'episode', as: :episode, locals: { current_user: @current_user }

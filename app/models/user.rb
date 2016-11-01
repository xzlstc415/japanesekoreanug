# User Model
class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end

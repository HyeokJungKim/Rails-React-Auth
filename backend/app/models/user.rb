class User < ApplicationRecord
  has_many :user_snacks
  has_many :snacks, through: :user_snacks
  
  has_secure_password
end

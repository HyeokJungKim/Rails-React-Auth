class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :money
  has_many :user_snacks
end

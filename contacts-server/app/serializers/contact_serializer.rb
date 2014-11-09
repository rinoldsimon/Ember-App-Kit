class ContactSerializer < ActiveModel::Serializer
  attributes :id,
  			 :name,
  			 :email,
  			 :number
end

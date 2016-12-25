json.(@user, :name, :email)
json.avatar_url @user.avatar.url(:thumb)

class ChangeColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :linked_in_url
    add_column :teams, :linked_in_url, :string
  end
end

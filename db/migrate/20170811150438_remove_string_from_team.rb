class RemoveStringFromTeam < ActiveRecord::Migration[5.0]
  def change
    remove_column :teams, :string
  end
end


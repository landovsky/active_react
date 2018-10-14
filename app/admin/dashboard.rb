ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    id = 0
    user_map = Array.new(5) do
      id += 1
      { name: Faker::Name.name, id: id }
    end.to_json

    script do
      raw "
        window.data = {
          'users': #{user_map},
        };
        "
    end
    link_to fa_icon "camera-retro"
    div id: 'react_app' do
      javascript_pack_tag 'app'
    end
  end
end

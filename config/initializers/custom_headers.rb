ActiveAdmin::Views::Pages::Base.class_eval do
  alias_method :original_build_active_admin_head, :build_active_admin_head

  def build_active_admin_head(*args, &block)
    original_build_active_admin_head(*args, &block)
    within @head do render '/custom_headers' end
  end
end
# Hồ Sơ Cá Nhân – Mobile Developer

Trang web hồ sơ cá nhân một trang (one–page portfolio) dành cho Lương – Mobile Developer, xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần. Giao diện theo phong cách glassmorphism, đi kèm hiệu ứng particles, parallax và điều hướng mượt giúp truyền tải câu chuyện nghề nghiệp một cách sống động.

## Công nghệ & Thư viện sử dụng
- **HTML5** cho cấu trúc nội dung theo từng section độc lập.
- **CSS3** với biến CSS, grid, flexbox và hiệu ứng glassmorphism/gradient.
- **JavaScript (ES6)** để xử lý canvas particles, hiệu ứng nghiêng (tilt), parallax badge và đồng bộ trạng thái điều hướng bằng `IntersectionObserver`.
- **Google Fonts – Montserrat** cho typography nhất quán.
- **Font Awesome 6.5.1** cung cấp icon cho social, kỹ năng và điều hướng.

## Cấu trúc thư mục
- `index.html` – Toàn bộ bố cục trang với 7 section chính (Home, Interests, Skills, Projects, Community, Journey, Contact) và thanh điều hướng hai kiểu (sidebar + top bar).
- `styles.css` – Định nghĩa chủ đề màu sắc, hiệu ứng glass, gradient orb, bố cục responsive, cùng các thành phần reusable (cards, badges, timeline…).
- `app.js` – Logic nền: canvas particles, hiệu ứng tilt dựa trên tọa độ chuột, parallax cho huy hiệu nổi, cập nhật trạng thái active cho điều hướng, đồng bộ pointer glow.
- `assets/` – Ảnh đại diện, hình minh họa project, journey avatar và icon tùy chỉnh.

## Nội dung & Tính năng nổi bật
- **Hero Section (Home)**: Thẻ giới thiệu chính dạng glass-card với lời chào, mục tiêu học tập, liên kết mạng xã hội, trạng thái sinh viên và khối avatar phát sáng.
- **Info Panels**: Ba panel (About Me, Career Objective, More About Me) trình bày ngắn gọn thông tin nền tảng, mục tiêu ngắn/trung/dài hạn và quan điểm sống.
- **Interests Section**: Hai thẻ song song (Personal/Professional) minh họa bằng hình ảnh, liệt kê hoạt động duy trì cân bằng và đam mê công việc.
- **Skills Section**: Bộ thẻ kỹ năng (Programming Languages, Frameworks & Tools, Soft Skills) kèm mô tả ngắn, điểm mạnh và thanh tiến độ trực quan.
- **Projects Section**: Lưới bốn dự án tiêu biểu (VacTrack, Fastest Finger First, MultiDriver Hub, License Plate Scanner) chứa ảnh thumbnail, mô tả, điểm nổi bật và đường dẫn GitHub.
- **Community & Credentials**: Liệt kê chứng chỉ, thành tích cá nhân, ghi chú quá trình học tập liên tục.
- **Journey Timeline**: Cột mốc từng năm (2022–2024) mô tả hành trình học tập và phát triển kỹ năng mobile.
- **Contact Section**: Thông tin liên hệ (địa điểm, số điện thoại, email, mạng xã hội) cùng form thu thập yêu cầu hợp tác.

## Hiệu ứng giao diện & Trải nghiệm người dùng
- **Particle background**: Canvas toàn màn hình với hạt gradient chuyển động, tự động resize khi thay đổi kích cỡ cửa sổ.
- **Tilt & parallax**: Các thẻ có lớp `tilt` phản ứng theo vị trí chuột, tạo cảm giác chiều sâu; huy hiệu nổi cập nhật theo tọa độ con trỏ để tạo chuyển động mềm mại.
- **Pointer glow**: CSS custom properties cập nhật liên tục theo tọa độ chuột, tạo hiệu ứng ánh sáng bám theo người dùng.
- **Smooth navigation**: Nút điều hướng ở sidebar và topbar cuộn mượt đến từng section và tự động đánh dấu trạng thái active khi section nằm trong viewport.
- **Responsive layout**: Grid/flex được tinh chỉnh để hiển thị tốt trên màn hình lớn, máy tính bảng và điện thoại.

## Cách chạy dự án
1. Tải mã nguồn (clone hoặc download ZIP) về máy.
2. Mở file `index.html` trực tiếp bằng trình duyệt bất kỳ (Chrome, Edge, Firefox…).
3. Đảm bảo kết nối Internet để tải Google Fonts, Font Awesome và các ảnh/asset được tham chiếu.

## Tùy chỉnh nhanh
- **Cập nhật thông tin cá nhân**: Sửa nội dung trong `index.html` ở từng section (tên, mô tả dự án, liên kết mạng xã hội…).
- **Thay đổi hình ảnh**: Thay file trong thư mục `assets/` và cập nhật thuộc tính `src` tương ứng.
- **Điều chỉnh chủ đề màu sắc**: Sửa các biến màu, gradient và đổ bóng trong `styles.css`.
- **Tối ưu nội dung form**: Tại `Contact Section`, thêm endpoint backend hoặc dịch vụ form để nhận dữ liệu người dùng.

## Ghi chú
- Form liên hệ hiện chỉ mang tính trình diễn (không gửi dữ liệu); cần bổ sung xử lý phía server để hoạt động thực tế.
- Các ký tự tiếng Việt trong file nguồn cần đảm bảo lưu ở UTF-8 để tránh lỗi hiển thị.

## Định hướng phát triển thêm
1. Tích hợp chế độ sáng/tối (light/dark mode) điều khiển bằng JavaScript.
2. Gắn kết backend (ví dụ sử dụng Firebase Functions) để lưu dữ liệu form liên hệ.
3. Đóng gói và triển khai site lên GitHub Pages hoặc platform tĩnh tương tự, kèm badge CI/CD.

---

Mọi thắc mắc hoặc góp ý vui lòng liên hệ qua phần Contact của trang hoặc email `0902nguyenluong@gmail.com`.

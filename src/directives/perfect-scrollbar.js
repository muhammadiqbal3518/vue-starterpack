import PerfectScrollbar from "perfect-scrollbar";
import 'perfect-scrollbar/css/perfect-scrollbar.css';
export default {
    mounted(el, binding) {
        // Initialize Perfect Scrollbar
        const options = binding.value || {};
        el._ps = new PerfectScrollbar(el, options);
        },
        updated(el) {
        // Update Perfect Scrollbar on content change
        if (el._ps) {
            el._ps.update();
        }
        },
        unmounted(el) {
        // Destroy Perfect Scrollbar instance
        if (el._ps) {
            el._ps.destroy();
            delete el._ps;
        }
        },
    };